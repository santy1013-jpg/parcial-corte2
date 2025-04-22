# 📘 Historias de Usuario - Proyecto Ionic React

## ✅ HU-001 – Lista de productos (`ProductList.tsx`)
**Como** usuario del sistema  
**Quiero** visualizar una lista de productos disponibles  
**Para** poder agregarlos al carrito de compras

### 🎯 Criterios de aceptación:
- Se muestra una tarjeta (IonCard) por cada producto.
- Cada producto tiene un botón “Agregar”.
- Al hacer clic en el botón, se muestra una alerta con el mensaje “producto agregado al carrito”.
- El componente es responsivo.

---

## ✅ HU-002 – Encabezado de factura (`InvoiceHeader.tsx`)
**Como** usuario del sistema  
**Quiero** ver un encabezado de factura con información relevante  
**Para** identificar fácilmente la compra y sus datos generales

### 🎯 Criterios de aceptación:
- Muestra el título de la factura.
- Incluye número, fecha y cliente (si aplica).
- Se integra fácilmente con el componente de factura.

---

## ✅ HU-003 – Tipos de pago (`PaymentTypes.tsx`)
**Como** usuario del sistema  
**Quiero** seleccionar un método de pago  
**Para** poder completar la compra de productos

### 🎯 Criterios de aceptación:
- Muestra varios métodos de pago.
- El usuario puede seleccionar uno.
- El valor se pasa al sistema de facturación.

---

## ✅ HU-004 – Contenedor de exploración (`ExploreContainer.tsx`)
**Como** desarrollador del sistema  
**Quiero** tener un contenedor base reutilizable  
**Para** mostrar contenido dinámico o mensajes en distintas páginas

### 🎯 Criterios de aceptación:
- Acepta contenido dinámico con props.
- Se reutiliza en diferentes páginas.
- Tiene estilo coherente con la app.
