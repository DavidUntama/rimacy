ALTER TABLE pedidos_det
ADD CONSTRAINT fk_producto
FOREIGN KEY (id_producto) REFERENCES productos(id);

ALTER TABLE pedidos_det
ADD CONSTRAINT fk_unidad
FOREIGN KEY (id_unidad) REFERENCES unidades(id);

# crear indice unico para evitar duplicado ya que se usara una clave simple en esta tabla
CREATE UNIQUE INDEX idx_unique_producto_unidad
ON producto_unidad (id_producto, id_unidad);