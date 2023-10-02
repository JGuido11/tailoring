import React from 'react';

interface OrderListItemProps {
  order: any; // Substitua 'any' pelo tipo de dados real do pedido
  onExport: () => void;
  onDelete: () => void;
}

const OrderListItem: React.FC<OrderListItemProps> = ({ order, onExport, onDelete }) => {
  return (
    <div className="order-list-item">
      {/* Renderizar informações do pedido aqui, por exemplo: */}
      <p>Product Name: {order.productName}</p>
      <p>Order Date: {order.orderDate}</p>

      {/* Botão de exportação */}
      <button onClick={onExport}>Export</button>

      {/* Botão de exclusão */}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default OrderListItem;
