const Private = ({ user, logout }) => {
  return (
    <div>
      <h1>Szia, {user}!</h1>
      <div>Formázott tartalom</div>
      <button className="logoutBtn" onClick={logout}>
        Kijelentkezés
      </button>
    </div>
  );
};

export default Private;
