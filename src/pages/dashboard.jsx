import useFetch from "../services/fetch";

function Dashboard() {
  const { data, loading, error } = useFetch("user/12");

  return (
    <>
      {loading ? (
        <p>Chargement</p>
      ) : (
        <>
          {data &&
            (error ? <p>{data}</p> : <p>Bonjour {data.userInfos.firstName}</p>)}
        </>
      )}
    </>
  );
}

export default Dashboard;
