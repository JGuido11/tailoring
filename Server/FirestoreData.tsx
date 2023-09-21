import { db } from './firebase';

// Defina as coleções no Firestore
const clientsCollection = db.collection('clients');
const ordersCollection = db.collection('orders');
const productsCollection = db.collection('products');
const measurementsCollection = db.collection('measurements');

// Exemplo de como adicionar um cliente ao Firestore
const addClient = async (name: string, email: string) => {
  try {
    await clientsCollection.add({
      name,
      email,
    });
    console.log('Cliente adicionado com sucesso');
  } catch (error) {
    console.error('Erro ao adicionar cliente:', error);
  }
};

// Exemplo de como buscar todos os pedidos de um cliente
const getOrdersByClient = async (clientId: string) => {
  try {
    const querySnapshot = await ordersCollection.where('clientId', '==', clientId).get();
    const orders = querySnapshot.docs.map((doc) => doc.data());
    return orders;
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error);
    return [];
  }
};

export { addClient, getOrdersByClient };
