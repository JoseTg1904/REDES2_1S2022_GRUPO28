# Comandos

---

## Red Vodafone

---

### Router 1

```shell

# Configuración de Subredes

conf t
int gig0/0
ip address 192.168.58.193 255.255.255.252
no sh
exit
int gig0/1
ip address 192.168.58.1 255.255.255.192
no sh
end


# Configuración de OSPF

conf t
router ospf 100
network 192.168.58.0 0.0.0.63 area 0
network 192.168.58.192 0.0.0.3 area 0
end

```

---

### Router 2

```shell

# Configuración de Subredes

conf t
int gig0/0
ip address 192.168.58.197 255.255.255.252
no sh
exit
int gig0/1
ip address 192.168.58.65 255.255.255.192
no sh
end


# Configuración de OSPF

conf t
router ospf 200
network 192.168.58.64 0.0.0.63 area 0
network 192.168.58.196 0.0.0.3 area 0
end


```

---

### Router 3

```shell

# Configuración de Subredes

conf t
int gig0/0
ip address 192.168.58.202 255.255.255.252
no sh
exit
int gig0/1
ip address 192.168.58.129 255.255.255.192
no sh
end


# Configuración de RIP

conf t
router rip
version 2
no auto-summary
network 192.168.58.128
network 192.168.58.200
default-information originate
end

```

---

### Router 0

```shell

# Configuración de Subredes

conf t
int gig0/0
ip address 192.168.58.194 255.255.255.252
no sh
exit
int gig0/1
ip address 192.168.58.198 255.255.255.252
no sh
exit
int gig0/2
ip address 192.168.58.201 255.255.255.252
no sh
exit
int se0/3/0
ip address 1.1.1.1 255.255.255.252
no sh
end


# Configuración de OSPF

conf t
router ospf 300
network 192.168.58.192 0.0.0.3 area 0
network 192.168.58.196 0.0.0.3 area 0
end


# Configuración de RIP

conf t
router rip
version 2
no auto-summary
network 192.168.58.200
default-information originate
end


# BGP

conf t
router bgp 1
network 1.1.1.0 mask 255.255.255.252
neighbor 1.1.1.2 remote-as 2 # TODO: Está linea falta pero se agrega hasta que este configurado el otro bgp
redistribute connected
end


# Redistribución de protocolos
# OSPF-RIP

conf t
router ospf 300
redistribute rip subnets
end

# RIP-OSPF

conf t
router rip
redistribute ospf 300 metric 15
end

```

---

## Red Telefonica