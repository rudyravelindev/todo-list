function createProject(name) {
  return {
    id: crypto.randomUUID(),
    name,
    tasks: [],
  };
}

export default createProject;
