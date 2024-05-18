// import React from "react";
// import useUsers from "../hooks/useUsers";
// import UserCard from "../components/Title ";

// const Usuarios: React.FC = () => {
//   const { users, loading, error } = useUsers();

//   if (loading) return <p>Carregando...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold">Usuários</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {users.map((user) => (
//           <UserCard key={user.userCode} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Usuarios;
