import React, { useState } from 'react';
import OrderListItem from './OrderListItem';
import ExportButtonContainer from '../../Context/ExportCSV';

const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([
    // Substituir pelos dados reais.
    {
      id: 1,
      productName: 'Product 1',
      orderDate: '2023-09-30',
    },
    {
      id: 2,
      productName: 'Product 2',
      orderDate: '2023-10-01',
    },
    // ...
  ]);

  const handleExport = (order) => {
    // Lógica para exportar os pedidos, por exemplo, para um arquivo CSV

    // Aqui você pode formatar os dados de acordo com o formato de exportação desejado
    // e criar um arquivo para download

    // Por exemplo, para exportar para CSV:
    const csvData = orders.map((order) => {
      return `${order.id},${order.product},${order.quantity},${order.price}`;
    });

    // Une os dados CSV em uma string
    const csvString = 'ID,Produto,Quantidade,Preço\n' + csvData.join('\n');

    // Cria um objeto Blob com os dados CSV
    const blob = new Blob([csvString], { type: 'text/csv' });

    // Cria um URL para o Blob
    const url = window.URL.createObjectURL(blob);

    // Cria um elemento de link para download do arquivo
    const link = document.createElement('a');
    link.href = url;
    link.download = 'orders.csv';

    // Dispara um clique no link para iniciar o download
    link.click();

    // Revoga o URL do Blob após o download
    window.URL.revokeObjectURL(url);
  };

  const handleDelete = (order: any) => {
  // Encontra o índice do pedido na lista
  const index = orders.findIndex((o) => o.id === order.id);
  if (index !== -1) {
    // Cria uma cópia da lista de pedidos e remove o pedido pelo índice
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);

    // Define a nova lista de pedidos após a exclusão
    setOrders(updatedOrders);

    // Aqui, você também pode fazer uma solicitação ao servidor para excluir o pedido,
    // enviando o ID do pedido ao servidor para exclusão.
  }};

  return (
    <div className="order-list">
      {orders.map((order) => (
        <OrderListItem
          key={order.id}
          order={order}
          onExport={() => handleExport(order)}
          onDelete={() => handleDelete(order)}
        />
      ))}
    </div>
  );
};

export default OrderList;
