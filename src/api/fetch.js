export async function getPeople(){
    const response = await fetch(`https://swapi.dev/api/people`);
    const data = await response.json();
    return data;
}

export async function getPlanets(){
    const response = await fetch(`https://swapi.dev/api/planets`);
    const data = await response.json();
    return data;
}

export async function getVehicles(){
    const response = await fetch(`https://swapi.dev/api/vehicles`);
    const data = await response.json();
    return data;
}

export async function getSingleCharacter(id){
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const data = await response.json();
    return data;
}

export async function getSinglePlanet(id){
    const response = await fetch(`https://swapi.dev/api/planets/${id}`);
    const data = await response.json();
    return data;
}

export async function getSingleVehicle(id){
    const response = await fetch(`https://swapi.dev/api/vehicles/${id}`);
    const data = await response.json();
    return data;
}