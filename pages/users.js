
export default function UserList({users}) {
  return (
      <>
        <div>List of Users</div>
        {
            users.map(user => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))
        }
    </>
  )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return {
        props: {
            users: data
        }
    }
}
