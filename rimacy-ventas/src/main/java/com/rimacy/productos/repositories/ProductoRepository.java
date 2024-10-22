package com.rimacy.productos.repositories;

import com.rimacy.productos.models.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
}
