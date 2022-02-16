# Comandos

## Router

```shell

```

## SWICH 0 - SERVER

```shell
enable

conf t
vlan 11
name Ventas
vlan 21
name Distribucion
vlan 31
name Administracion
vlan 41
name Servidores
vlan 99
name Management&Native
vlan 999
name BlackHole
exit

vtp version 2
vtp mode server
vtp domain g28
vtp password g28
exit


```

## SWICH 1 -CLIENT

```shell
enable

conf t
vtp version 2
vtp mode client
vtp domain g28
vtp password g28

```

## SWICH 2 -CLIENT

```shell
enable

conf t
vtp version 2
vtp mode client
vtp domain g28
vtp password g28

```

## SWICH 3 -CLIENT

```shell
enable

conf t
vtp version 2
vtp mode client
vtp domain g28
vtp password g28

```

## SWICH 4 -CLIENT

```shell
enable

conf t
vtp version 2
vtp mode client
vtp domain g28
vtp password g28

```

## SWICH 5 -CLIENT

```shell
enable

conf t
vtp mode client
vtp version 2
vtp domain g28
vtp password g28

```

## Configuracion de PCs y Servers

### PC0

- IPv4 Address = 192.168.11.2
- Subnet Mask = 255.255.255.224
- Default Gateway = 192.168.11.1

### PC1

- IPv4 Address = 192.168.11.3
- Subnet Mask = 255.255.255.224
- Default Gateway = 192.168.11.1

### PC2

- IPv4 Address = 192.168.11.34
- Subnet Mask = 255.255.255.224
- Default Gateway = 192.168.11.33

### PC3

- IPv4 Address = 192.168.11.35
- Subnet Mask = 255.255.255.224
- Default Gateway = 192.168.11.33

### PC4

- IPv4 Address = 192.168.11.4
- Subnet Mask = 255.255.255.224
- Default Gateway = 192.168.11.1

### PC5

- IPv4 Address = 192.168.11.36
- Subnet Mask = 255.255.255.224
- Default Gateway = 192.168.11.33

### PC6

- IPv4 Address = 192.168.11.66
- Subnet Mask = 255.255.255.224
- Default Gateway = 192.168.11.65

### PC7

- IPv4 Address = 192.168.11.67
- Subnet Mask = 255.255.255.224
- Default Gateway = 192.168.11.65

### Server0

- IPv4 Address = 192.168.11.98
- Subnet Mask = 255.255.255.224
- Default Gateway = 192.168.11.97

### Server1

- IPv4 Address = 192.168.11.67.99
- Subnet Mask = 255.255.255.224
- Default Gateway = 192.168.11.97

## Servidores Web

```html
<html>
  <center>
    <font size="+2" color="blue"><h1>Servidor (1|2)?</h1></font>
  </center>
  <hr />
  <table>
    <tr>
      <td>Nombre</td>
      <td>Carnet</td>
    </tr>
    <tr>
      <td>José Carlos I Alonzo Colocho</td>
      <td>201700965</td>
    </tr>
    <tr>
      <td>Estanley Rafael Cóbar García</td>
      <td>201700319</td>
    </tr>
    <tr>
      <td>Oscar Armin Crisostomo Ruiz</td>
      <td>201709140</td>
    </tr>
  </table>
</html>
```
