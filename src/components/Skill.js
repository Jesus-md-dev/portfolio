import "./Skill.css";

function Skill(params) {
  return (
    <div className="Skill m-3">
      <h5 className="text m-0">
        <strong>{params.name}</strong>
      </h5>
    </div>
  );
}

export default Skill;
