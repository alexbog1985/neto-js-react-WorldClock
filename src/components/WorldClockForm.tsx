export default function WorldClockForm() {
  return (
      <form className="watch-form">
        <div className="form-group">
          <label>Название</label>
          <input type="text" required></input>
        </div>
        <div className="form-group">
          <label>Временная зона</label>
          <input type="number" required></input>
        </div>
        <button className="btn">Добавить</button>
      </form>
    )
  }