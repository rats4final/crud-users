import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

type HomeProps = {
  users: User[];
};

async function Home() {
  const users = await getUsers();
  return (
    <main>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}

async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export default Home;