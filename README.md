# T_gestor_empresas
BackEnd (Node.js, Express y MongoDB).

## Especificaciones uso del programa
- Cuenta con 4 colecciones y son validas por token exceptuando register:
- Enterprise: las request son los filtros que solicita el programa, de tipo get y el put de edit enterprise
- login: cuenta con un request de tipo post
- register admin: su única request es de tipo post
- register enterprise: igualmente que register admin cuenta con una request de tipo post

### Az - Za
Funciona poniendo la consulta de la siguiente manera.
http://localhost:3000/COPEREX/v1/enterprise?sortOrder=az
http://localhost:3000/COPEREX/v1/enterprise?sortOrder=za

### Filter by Year
Funciona con su ruta http://localhost:3000/COPEREX/v1/enterprise/filterYear?experience={year}
la especificación de el {year} tipo number, trae las empresas que tengan ese parametro que pide en la consulta.

### Filter by category
Funciona con la url http://localhost:3000/COPEREX/v1/enterprise/filterByCategory?category={category}
la especificación de la {categoria} trae las empresas que tengan ese parametro que pide en la consulta.

### Register by Excel
Funciona con la ruta: http://localhost:3000/COPEREX/v1/enterprise/excelReport
Genera el excel y thunder nos proporciona la opción de "Save file".

### Put enterprise
funciona con la url: http://localhost:3000/COPEREX/v1/enterprise/{_id}
la especificación de la {_id} trae las empresas que tengan ese parametro que pide en la consulta.

## Programa
### ¿Qué debo hacer?
La empresa COPEREX está buscando desarrollar una solución eficiente y moderna para
gestionar la incorporación de nuevos socios y empresas a su famosa feria “Interfer”.
Para ello, se requiere la creación de una API robusta utilizando Node.js, Express y MongoDB.
Esta API permitirá a las empresas registrar sus datos, incluyendo información crucial como su
nivel de impacto, años de trayectoria y categoría empresarial.
Además, se busca que esta API genere automáticamente un reporte en formato Excel, que reúna
de manera organizada y accesible la información de todas las empresas registradas en el
sistema. Este reporte será una herramienta valiosa para el análisis y la toma de decisiones
estratégicas de "Interfer".
Deberá contener lo siguiente:
1. Inicio de sesión: a este sistema sólo tendrán acceso los administradores, es decir, no
habrán más roles que solo los del administrador. Este administrador será el encargado de
registrar a los nuevos clientes o empresas que deseen presentarse en la “Interfer”.

3. Registro de empresas: proporcionará un formulario para que las empresas ingresen
datos clave, como nivel de impacto, años de trayectoria y categoría empresarial (Si
considera necesario más datos debe agregarlos).

5. Visualización de empresas: permitirá a los administradores ver un listado completo de
todas las empresas registradas, con la capacidad de filtrar y ordenar la información según
diversos criterios (se puede filtrar, por años de trayectoria, categoría, A-Z y Z-A), además
de poder editar la información de las mismas, sin la posibilidad de eliminarlas.

7. Generación de Reportes: será responsable de recopilar la información de todas las
empresas registradas y generar un reporte en formato Excel.



