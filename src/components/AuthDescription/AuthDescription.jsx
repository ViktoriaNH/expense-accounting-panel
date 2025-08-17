import "./AuthDescription.scss";

const AuthDescription = () => {
  return (
    <section className="auth-decription">
      <div className="auth-decription__inner">
        <h1>Авторизация</h1>
        <p>
          Панель учёта расходов поможет распределить финансы по полочкам и
          строить отчёты автоматически.
        </p>
        <p>
          Мы любим тратить деньги, а ещё больше удовольствия получаем, когда
          тратим с умом.
        </p>
        <img
        width={588}
        height={397}
        alt=""
        loading="eager"
        
        ></img>
      </div>
    </section>
  );
};

export default AuthDescription;
