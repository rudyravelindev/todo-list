import createProject from './project.js';
import createTask from './task.js';

const projectManager = (function () {
  let projects = [];

  const saveToStorage = () => {
    try {
      const projectsJson = JSON.stringify(projects);
      localStorage.setItem('projectsData', projectsJson);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  const loadFromStorage = () => {
    try {
      const projectsJson = localStorage.getItem('projectsData');
      if (projectsJson !== null) {
        projects = JSON.parse(projectsJson);
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
    }
  };
  loadFromStorage();
  if (projects.length === 0) {
    projects.push(createProject('Default'));
  }
  const addProject = (name) => {
    const newProject = createProject(name);
    projects.push(newProject);
    saveToStorage();
    return newProject;
  };

  const getProject = () => projects;

  const deleteProject = (id) => {
    projects = projects.filter((project) => project.id !== id);
    saveToStorage();
  };
  const addTask = (projectId, title, description, date, priority, status) => {
    const project = projects.find((p) => p.id === projectId);
    if (!project) return null;

    const newTask = createTask(title, description, date, priority, status);

    project.tasks.push(newTask);

    saveToStorage();
    return newTask;
  };

  const deleteTask = (projectId, taskId) => {
    const project = projects.find((p) => p.id === projectId);
    if (!project) return;

    project.tasks = project.tasks.filter((task) => task.id !== taskId);
    saveToStorage();
  };

  return {
    addProject,
    getProject,
    deleteProject,
    deleteTask,
    addTask,
    saveToStorage,
  };
})();

export default projectManager;
