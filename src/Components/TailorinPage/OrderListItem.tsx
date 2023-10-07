import React from 'react';
import "../../styles/css/styles.css";

interface Order {
  id: number;
  product: string;
  quantity: number;
  // price: number;
}

interface OrderListItemProps {
  order: Order;
  onDelete: () => void; // Passar a Função para exclusão
  onExport: () => void; // Passar a Função para exportar
}

const OrderListItem: React.FC<OrderListItemProps> = ({ order, onDelete, onExport }) => {
  return (
    <div className="orderListItem">
      <div className="product">
        <div className="actions">
          <button onClick={onDelete}>Delete</button>
          <button onClick={onExport}>Export</button>
        </div>
        <div>{order.product}</div>
      </div>
      <div className="quantity">{order.quantity}</div>
      {/* <div className={styles.price}>${(order.quantity * order.price).toFixed(2)}</div> */}
    </div>
  );
};

export default OrderListItem;
