import { get, post, put, del } from './api.js';

const endpoints = {
    'fruits': '/data/fruits',
    'getAllFruits': '/data/fruits?sortBy=_createdOn%20desc',
    'singleFruit': '/data/fruits/',
    'search': '/data/fruits?where=name'
}

export async function createFruit(data) {
    return post(endpoints.fruits, data);
}

export async function getAllFruits() {
    return get(endpoints.getAllFruits);
}

export async function getDetailsById(id) {
    return get(endpoints.singleFruit + id);
}

export async function deleteFruitById(id) {
    return del(endpoints.singleFruit + id);
}

export async function updateFruit(id, data) {
    return put(endpoints.singleFruit + id, data);
}

export async function searchFruit(query) {
    return get(endpoints.search + encodeURIComponent(` LIKE "${query}"`));
}