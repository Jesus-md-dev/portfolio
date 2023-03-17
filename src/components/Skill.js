import "./Skill.css";

function Skill(params) {
  return (
    <div className="Skill p-3 m-3 w-25 rounded">
      <div>{params.svg}</div>
      <h5 className="pt-3">{params.name}</h5>
      <div>{params.text}</div>
    </div>
  );
}

export default Skill;
