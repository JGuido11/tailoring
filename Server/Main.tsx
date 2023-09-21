/**
 * TODO:Implementar Firebase
 */

// import React, { useEffect, useState } from 'react';
// import { db, auth, firebase } from './firebase';
// import { signIn, signOut } from './Auth';
// import { addClient, getOrdersByClient } from './FirestoreData';

// function MainApp() {
//   const [user, setUser] = useState<firebase.User | null>(null);
//   const [clientName, setClientName] = useState('');
//   const [clientEmail, setClientEmail] = useState('');
//   const [clientOrders, setClientOrders] = useState<any[]>([]);

//   useEffect(() => {
//     // Monitorar o estado de autenticação do usuário
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         setUser(authUser);
//       } else {
//         setUser(null);
//       }
//     });

//     return () => {
//       unsubscribe(); // Remova o observador quando o componente é desmontado
//     };
//   }, []);

//   const handleSignIn = () => {
//     // Exemplo de função de login ao clicar em um botão
//     signIn('example@email.com', 'password123');
//   };

//   const handleSignOut = () => {
//     // Exemplo de função de logout ao clicar em um botão
//     signOut();
//   };

//   const handleAddClient = () => {
//     // Exemplo de adicionar um cliente ao Firestore
//     addClient(clientName, clientEmail);
//     setClientName('');
//     setClientEmail('');
//   };

//   const handleGetOrders = async (clientId: string) => {
//     // Exemplo de buscar os pedidos de um cliente
//     const orders = await getOrdersByClient(clientId);
//     setClientOrders(orders);
//   };

//   return (
//     <div>
//       {user ? (
//         <div>
//           <p>Bem-vindo, {user.email}!</p>
//           <button onClick={handleSignOut}>Sair</button>
//         </div>
//       ) : (
//         <div>
//           <button onClick={handleSignIn}>Login</button>
//         </div>
//       )}

//       <div>
//         <h2>Adicionar Cliente</h2>
//         <input
//           type="text"
//           placeholder="Nome do Cliente"
//           value={clientName}
//           onChange={(e) => setClientName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Email do Cliente"
//           value={clientEmail}
//           onChange={(e) => setClientEmail(e.target.value)}
//         />
//         <button onClick={handleAddClient}>Adicionar Cliente</button>
//       </div>

//       <div>
//         <h2>Consultar Pedidos do Cliente</h2>
//         <button onClick={() => handleGetOrders('CLIENT_ID')}>Buscar Pedidos</button>
//         <ul>
//           {clientOrders.map((order, index) => (
//             <li key={index}>{order.orderDetails}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default MainApp;
