
# API de Adopción de Mascotas

Esta API permite a los usuarios adoptar mascotas. Ofrece funcionalidades para listar mascotas disponibles y gestionar el proceso de adopción.


## Deployment

Clonar el repositorio:

```bash
  git clone https://github.com/bakiUru/BackendIII.git
```
Instalar Dependencias
```bash
  npm install
```
Iniciar el Servidor
```bash
  npm start
```

## Environment Variables

Para Iniciar este Servidor se Necitaran distintas Key

`PORT` 
`LOG_LEVEL`
`MONGO_DB `
`HASH_USER` 
`SECRET_COOKIE` 
`JWT_SECRET`



## Endpoint 

### PET
Obtener todas las mascotas
Método: GET
Ruta: api/pets
Respuesta: Un arreglo de objetos que representan a cada mascota, incluyendo información como nombre, raza, edad, imagen, etc.
```bash
  http://localhost:3030/api/pets
```

Obtener una mascota por ID
Método: GET
Ruta: /pets/:pid
Respuesta: Un objeto que representa a la mascota con el ID especificado.
```bash
http://localhost:3030/api/pets/670c178b1fefdcd526f8a654
```

Crear una nueva Mascota
Método: POST
Ruta: /api/pets
Cuerpo de la solicitud: Un objeto JSON con los datos de la nueva Mascota. 
```bash
 http://localhost:3030/api/pets 
```
```json
{
  "name": "ExamplePet 1"
  "specie": "Dog"
  "adopted": true
  "owner": "670c178b1fefdcd526f8a654"
  "image": "https://danspetcare.com/pets/an-extensive-guide-to-the-most-common-dogs"
  "birthday": "2020-05-01"   
}
```

### USER
Obtener todos los Usuario
Método: GET
Ruta: api/users
Respuesta: Un arreglo de objetos que representan a cada usuario
```bash
  http://localhost:3030/api/users
```

Obtener una mascota por ID
Método: GET
Ruta: api/users/:uid
Respuesta: Un objeto que representa al usuario con el ID especificado.
```bash
http://localhost:3030/api/users/670c178b1fefdcd526f8a654
```

Crear un Nuevo Usuario
Método: POST
Ruta: /api/users
Cuerpo de la solicitud: Un objeto JSON con los datos del Usuario. 
```bash
 http://localhost:3030/api/users 
```
```json
{
  "firs_name": "testUser"
  "last_name": "testUser2"
  "email": "user1@test.com"
  "password": "test1234"
  "role": "user"
  "pet": []  
}
```

## Seguridad

Para proteger los datos de los usuarios y las mascotas, la API cuenta con un sistema de autenticación basado en tokens JWT.

## DOCKER

```bash
https://hub.docker.com/layers/bakidev/entregafinal/latest/images/sha256:c477e4f1846d1fcd285ea6a830f0abb2dce699b26fe131261791272aa29f0ad6?uuid=F263425D-D3AF-4686-9C14-BBA919BBA62C
```

## Documentation

[Documentation](http://localhost:3030/apidocs)

