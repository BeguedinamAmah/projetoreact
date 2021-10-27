import React from "react";
import { Button } from "./Button";
import './Pricing.css'
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link, } from "react-router-dom";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Preço</h1>
            <div className="pricing__container">
              <Link to="/Se-inscrever" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Stater</h3>
                  <h4>R$8.99</h4>
                  <p>por mês</p>
                  <ul className="pricing__container-features">
                    <li>100 transações</li>
                    <li>2% Cash Bash</li>
                    <li>Limite de R $ 10.000</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Escolha o Plano
                  </Button>
                </div>
              </Link>
              <Link to="/Se-inscrever" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>Gold</h3>
                  <h4>R$29.99</h4>
                  <p>por mês</p>
                  <ul className="pricing__container-features">
                    <li>1000 transações</li>
                    <li>3.5% Cash Bash</li>
                    <li>Limite de R $ 100.000</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Escolha o Plano
                  </Button>
                </div>
              </Link>
              <Link to="/Se-inscrever" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>Diamond</h3>
                  <h4>R$99.99</h4>
                  <p>por mês</p>
                  <ul className="pricing__container-features">
                    <li>Transação ilimitada</li>
                    <li>3.5% Cash Bash</li>
                    <li>Gastos Ilimitados</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Escolha o Plano
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
