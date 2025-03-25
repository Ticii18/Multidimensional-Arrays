personas = [];
telefonos = [];
nombre = input("Ingrese su nombre")
apellido = input("Ingrese su apellido")
dni = int(input("Ingrese su dni"))

cantidadNumeros = int(input("¿Cuántos números de teléfono desea ingresar?"))
for i in range(cantidadNumeros):
    telefono = input("Ingrese su número de teléfono")
    telefonos.append(telefono)

personas.append(nombre)
personas.append(apellido)
personas.append(dni)
personas.append(telefonos)

print(personas)
