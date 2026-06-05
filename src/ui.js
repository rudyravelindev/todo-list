import projectManager from './modules/projectManager.js';

let activeProjectId = null;

const projectModal = document.getElementById('project-modal');
const openProjectModalBtn = document.getElementById('open-project-modal');
const closeProjectModalBtn = document.getElementById('close-project-modal');
const projectForm = document.getElementById('project-form');

const taskModal = document.getElementById('task-modal');
const openTaskModalBtn = document.getElementById('open-task-modal');
const closeTaskModalBtn = document.getElementById('close-task-modal');
const taskForm = document.getElementById('task-form');

const projectListEl = document.getElementById('project-list');
const taskListEl = document.getElementById('task-list');

function renderProjects() {
  const currentProjectTitleEl = document.getElementById(
    'current-project-title',
  );

  projectListEl.innerHTML = '';

  const projects = projectManager.getProject();

  if (activeProjectId === null && projects.length > 0) {
    activeProjectId = projects[0].id;
  }

  projects.forEach((project) => {
    const li = document.createElement('li');
    li.className = `project-item ${project.id === activeProjectId ? 'active' : ''}`;
    li.setAttribute('data-project-id', project.id);

    const nameSpan = document.createElement('span');
    nameSpan.className = 'project-name-text';
    nameSpan.textContent = project.name;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete-project';
    deleteBtn.textContent = '×';

    li.appendChild(nameSpan);
    li.appendChild(deleteBtn);
    projectListEl.appendChild(li);
  });

  const currentProject = projects.find((p) => p.id === activeProjectId);
  if (currentProject) {
    currentProjectTitleEl.textContent = currentProject.name;
    openTaskModalBtn.removeAttribute('disabled');
    renderTasks(activeProjectId);
  } else {
    currentProjectTitleEl.textContent = 'Select a Project';
    openTaskModalBtn.setAttribute('disabled', 'true');
    renderTasks(null);
  }
}

function renderTasks(projectId) {
  taskListEl.innerHTML = '';

  if (!projectId) return;

  const projects = projectManager.getProject();
  const currentProject = projects.find((p) => p.id === projectId);

  if (
    !currentProject ||
    !currentProject.tasks ||
    currentProject.tasks.length === 0
  ) {
    taskListEl.innerHTML =
      '<li class="no-tasks">No tasks found for this project.</li>';
    return;
  }

  currentProject.tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = `task-item priority-${task.priority} status-${task.status}`;
    li.setAttribute('data-task-id', task.id);

    li.innerHTML = `
            <div class="task-main-info">
                <span class="task-title">${task.title}</span>
                <p class="task-desc">${task.description || ''}</p>
            </div>
            <div class="task-meta">
                <span class="task-date">${task.dueDate || ''}</span>
                <span class="task-badge">${task.priority.toUpperCase()}</span>
                <button class="btn-delete-task">Delete</button>
            </div>
        `;
    taskListEl.appendChild(li);
  });
}

openProjectModalBtn.addEventListener('click', () => {
  projectModal.showModal();
});

closeProjectModalBtn.addEventListener('click', () => {
  projectForm.reset();
  projectModal.close();
});

projectForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const projectNameInput = document.getElementById('project-name-input');
  const name = projectNameInput.value.trim();

  if (name) {
    const newProject = projectManager.addProject(name);
    activeProjectId = newProject.id;
    projectForm.reset();
    projectModal.close();
    renderProjects();
  }
});

openTaskModalBtn.addEventListener('click', () => {
  taskModal.showModal();
});

closeTaskModalBtn.addEventListener('click', () => {
  taskForm.reset();
  taskModal.close();
});

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('task-title-input').value.trim();
  const description = document.getElementById('task-desc-input').value.trim();
  const date = document.getElementById('task-date-input').value;
  const priority = document.getElementById('task-priority-input').value;
  const status = document.getElementById('task-status-input').value;

  if (title && activeProjectId !== null) {
    projectManager.addTask(
      activeProjectId,
      title,
      description,
      date,
      priority,
      status,
    );

    taskForm.reset();
    taskModal.close();
    renderTasks(activeProjectId);
  }
});

projectListEl.addEventListener('click', (e) => {
  const projectItem = e.target.closest('.project-item');
  if (!projectItem) return;

  const projectId = projectItem.getAttribute('data-project-id');

  if (e.target.classList.contains('btn-delete-project')) {
    e.stopPropagation();

    projectManager.deleteProject(projectId);

    if (activeProjectId === projectId) {
      activeProjectId = null;
    }

    renderProjects();
    return;
  }

  activeProjectId = projectId;
  renderProjects();
});

taskListEl.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-delete-task')) {
    const taskItem = e.target.closest('.task-item');
    if (!taskItem) return;

    const taskId = taskItem.getAttribute('data-task-id');

    projectManager.deleteTask(activeProjectId, taskId);

    renderTasks(activeProjectId);
  }
});

renderProjects();
