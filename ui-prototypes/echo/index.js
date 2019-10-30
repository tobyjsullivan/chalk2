
function service_new(clazz, name) {
  return {
    name: name,
    class: clazz
  };
}

function state_new() {
  return {
    services: []
  };
}

function state_addService(state, service) {
  state.services.push(service);
}

function mapResourceClass(service_class) {
  switch (service_class) {
    case 'id':
      return 'random_id';
    case 'integer':
      return 'random_integer';
    default:
      throw 'Unknown service name: '+service_name;
  }
}

const input = state_new();
state_addService(input, service_new('id', 'my_id'));
state_addService(input, service_new('integer', 'my_number'));

function resourceBlock_new(type, name) {
  return {
    type: type,
    name: name
  };
}

function state_toTerraform(state) {
  let blocks = [];

  for (let i = 0; i < state.services.length; i++) {
    const service = state.services[i];
    const resource = mapResourceClass(service.class);
    blocks.push(resourceBlock_new(resource, service.name));
  }

  return blocks_serialize(blocks);
}

function blocks_serialize(blocks) {
  var out = '';

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    out += `
    resource "${block.type}" "${block.name}" {
      // TODO
    }
    `;
  }

  return out;
}

const tf = state_toTerraform(input);

console.log(tf);
