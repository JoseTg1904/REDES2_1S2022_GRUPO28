# Comandos

## Router

```shell

enable 
conf t
int gig0/0
no shutdown
int gig0/0.11
enc dot1Q 11
ip addess 192.168.11.1 255.255.255.224

int gig0/0.21
enc dot1Q 21
ip address 192.168.11.33 255.255.255.224


int gig0/0.31
enc dot1Q 31
ip address 192.168.11.65 255.255.255.224


int gig0/0.41
enc dot1Q 41
ip address 192.168.11.97 255.255.255.224

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

// port channels
conf t
int range f0/1-2
channel-protocol pagp
channel-group 2 mode desirable
exit

int range f0/3-4
channel-protocol pagp
channel-group 4 mode desirable
exit

int range f0/5-6
channel-protocol pagp
channel-group 1 mode desirable
exit
exit

// spanning - tree
conf t
spanning-tree mode rapid-pvst
exit

//blackhole
conf t
int range f0/7-24
switchport mode access
switchport access vlan 999

int g0/2
switchport mode access
switchport access vlan 999
exit

// trunk
conf t
int range f0/1-6
swithcport mode trunk
switchport trunk allowed vlan 11,21,31,41,99,999
exit

// native
conf t
int range f0/1-6
switchport trunk native vlan 99
exit

// Desactivacion DTP
enable
conf t
int range f0/1-6
sw nonegotiate
exit
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

// port channels
conf t
int range f0/3-4
channel-protocol pagp
channel-group 1 mode desirable
exit
exit

//blackhole
conf t
int range f0/5-24
switchport mode access
switchport access vlan 999
exit

int g0/1
switchport mode access
switchport access vlan 999
exit
exit

// trunk
conf t
int range f0/1-4
swithcport mode trunk
switchport trunk allowed vlan 11,21,31,41,99,999
exit

// native
conf t
int range f0/1-4
switchport trunk native vlan 99
exit

// Desactivacion DTP
enable
conf t
int range f0/1-4
sw nonegotiate
exit
exit
```

## SWICH 2 -CLIENT

```shell
enable

conf t
vtp version 2
vtp mode client
vtp domain g28
vtp password g28

//port channels
enable
conf t
int range f0/1-2
channel-protocol pagp
channel-group 2 mode desirable
exit

int range f0/3-4
channel-protocol pagp
channel-group 3 mode desirable
exit
exit

//blackhole
enable
conf t
int range f0/5-20
switchport mode access
switchport access vlan 999
exit

int range g0/1-2
switchport mode access 
switchport access vlan 999
exit

//spanning - tree
conf t
spanning-tree mode rapid-pvst

// trunk
conf t
int range f0/1-4
swithcport mode trunk
switchport trunk allowed vlan 11,21,31,41,99,999
exit

// native
conf t
int range f0/1-4
switchport trunk native vlan 99
exit

//aceso vlan 11
conf t
int range f0/23-24
switchport mode access
switchport access vlan 11
exit

//acceso vlan 21
conf t
int range f0/21-22
switchport mode access
switchport access vlan 21
exit

// Desactivacion DTP
enable
conf t
int range f0/1-4
sw nonegotiate
exit
exit

// port-security
enable
conf t
int range f0/21-24
sw port-security
exit
exit

enable
conf t
int range f0/23-24
sw port-security
sw port-security maximum 5
exit
exit

enable
conf t
int range f0/21-22
sw port-security
sw port-security maximum 1
sw port-security mac-address sticky
sw port-security violation shutdown
exit
exit

```

## SWICH 3 -CLIENT

```shell
enable

conf t
vtp version 2
vtp mode client
vtp domain g28
vtp password g28

//port channels
enable
conf t
int range f0/1-2
channel-protocol pagp
channel-group 3 mode desirable
exit

int range f0/3-4
channel-protocol pagp
channel-group 4 mode desirable
exit
exit

//spanning tree
conf t
spanning-tree mode rapid-pvst

//blackhole
enable
conf t
int range f0/5-22
switchport mode access
switchport access vlan 999
Sexit

int range g0/1-2
switchport mode access
switchport access vlan 999
exit
exit

//acceso vlan 11
conf t
int f0/24
switchport mode access
switchport access vlan 11
exit
exit

//accesso vlan 21
conf t
int f0/23
switchport mode access
switchport access vlan 21
exit
exit

// Desactivacion DTP
enable
conf t
int range f0/1-4
sw nonegotiate
exit
exit

// port-security
enable
conf t
int range f0/23-24
sw port-security
exit
exit

enable
conf t
int f0/24
sw port-security
sw port-security maximum 5
exit
exit

enable
conf t
int f0/23
sw port-security
sw port-security maximum 1
sw port-security mac-address sticky
sw port-security violation shutdown
exit
exit

```

## SWICH 4 -CLIENT

```shell
enable

conf t
vtp version 2
vtp mode client
vtp domain g28
vtp password g28

//blackhole
enable
conf t
int range f0/2-22
switchport mode access
switchport access vlan 999
exit

int range g0/1-2
switchport mode access 
switchport access vlan 999
exit
exit

//acceso vlan 31
int f0/24
switchport mode access
switchport access vlan 31
exit
exit

//acceso vlan 41
int f0/23
switchport mode access
switchport access vlan 41
exit
exit

// Desactivacion DTP
conf t
int f0/1
sw nonegotiate
exit
exit

// port-security
enable
conf t
int range f0/23-24
sw port-security
exit
exit

enable
conf t
int f0/24
sw port-security
sw port-security maximum 1
sw port-security mac-address sticky
sw port-security violation shutdown
exit
exit

```

## SWICH 5 -CLIENT

```shell
enable

conf t
vtp mode client
vtp version 2
vtp domain g28
vtp password g28

//blackhole
enable
conf t
int range f0/2-22
switchport mode access
switchport access vlan 999
exit

int range g0/1-2
switchport mode access
switchport access vlan 999
exit
exit

//acceso vlan 31
int f0/24
switchport mode access
switchport access vlan 31
exit
exit

//acceso vlan 41
int f0/23
switchport mode access
switchport access vlan 41
exit
exit

// Desactivacion DTP
enable
conf t
int f0/1
sw nonegotiate
exit 
exit

// port-security
enable
conf t
int range f0/23-24
sw port-security
exit
exit

enable
conf t
int f0/24
sw port-security
sw port-security maximum 1
sw port-security mac-address sticky
sw port-security violation shutdown
exit
exit

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
