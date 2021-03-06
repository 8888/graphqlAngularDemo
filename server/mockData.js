'use strict';

exports.employees = {
  'e0': {
    id: 'e0',
    firstName: 'Dwight',
    lastName: 'Schrute',
    clients: ['c0', 'c1']
  },
  'e1': {
    id: 'e1',
    firstName: 'Jim',
    lastName: 'Halpert',
    clients: ['c2', 'c3']
  },
  'e2': {
    id: 'e2',
    firstName: 'Stanley',
    lastName: 'Hudson',
    clients: ['c4', 'c5']
  },
  'e3': {
    id: 'e3',
    firstName: 'Phyllis',
    lastName: 'Lapin-Vance',
    clients: ['c6', 'c7']
  }
};

exports.clients = {
  'c0': {
    id: 'c0',
    company: 'Lackawanna County',
    phone: '212-555-1111',
    salesRep: 'e0'
  },
  'c1': {
    id: 'c1',
    company: 'Dunmore High School',
    phone: '212-555-2222',
    salesRep: 'e0'
  },
  'c2': {
    id: 'c2',
    company: 'Stone, Cooper, and Grandy: Attorneys at Law',
    phone: '212-555-3333',
    salesRep: 'e1'
  },
  'c3': {
    id: 'c3',
    company: 'Harper Collins',
    phone: '212-555-4444',
    salesRep: 'e1'
  },
  'c4': {
    id: 'c4',
    company: 'East Pennyslvania Seminary',
    phone: '212-555-5555',
    salesRep: 'e2'
  },
  'c5': {
    id: 'c5',
    company: 'Haymont Tires',
    phone: '212-555-6666',
    salesRep: 'e2'
  },
  'c6': {
    id: 'c6',
    company: 'Down! The Pet Emporium',
    phone: '212-555-7777',
    salesRep: 'e3'
  },
  'c7': {
    id: 'c7',
    company: 'Tract Industries',
    phone: '212-555-8888',
    salesRep: 'e3'
  },
};

exports.users = {
  'a': {id: 'a', name: 'lee'},
  'b': {id: 'b', name: 'nora'}
};

exports.docs = {
  'a': {id: 'a', name: 'docA'},
  'b': {id: 'b', name: 'docB'}
};
