function createTask(title, description, date, priority, status) {
  return {
    id: crypto.randomUUID(),
    title,
    description,
    date,
    priority,
    status,
  };
}

export default createTask;
