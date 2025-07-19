# Sistema de Gestión de Cursos - Arquitectura de Microservicios

## Descripción

Aplicación web completa para la gestión de cursos educativos, desarrollada bajo una arquitectura de microservicios. El sistema permite a los usuarios explorar, buscar e inscribirse en cursos, mientras que los administradores pueden gestionar los cursos desde una interfaz exclusiva. Cuenta con un frontend moderno en React y múltiples microservicios backend escritos en Go, cada uno especializado en una función.

## Arquitectura del Sistema

### Microservicios
- Courses-API: Gestión CRUD de cursos con MongoDB.
- Users-API: Registro, login y administración de usuarios con MySQL y Memcached.
- Search-API: Búsqueda avanzada de cursos mediante SolR.
- Inscriptions-API: Registro de inscripciones, con balanceo de carga y validaciones de disponibilidad.
- Frontend: Interfaz de usuario construida con React.
### Infraestructura
- Docker & Docker Compose: Orquestación y contenedorización completa.
- RabbitMQ: Comunicación entre servicios para sincronización de datos.
- SolR: Búsqueda eficiente y filtrado por capacidad.
- MongoDB: Almacenamiento principal de datos de cursos.
- MySQL: Base de datos para usuarios.
- Memcached: Caché de datos de usuario.
- Nginx: Balanceador de carga para inscripciones.
- GitHub: Control de versiones.

## Instalación y Configuración

```bash
git clone git@github.com:Cervellini2501/FinalArqSoft_II.git
cd FinalArqSoft_II
docker compose up --build

Una vez levantados los servicios, en una nueva terminal:
```bash
node indexador.js
```

## Autores
- Valentina Cervellini, 2200169.
- María del Pilar Manavella, 2200292.
- Victoria Sponton, 2146222.
