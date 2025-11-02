import { Button } from "@/components/button";

// Função de exemplo para o clique
function handleClick() {
  console.log("clicked");
  // (Evite 'alert' em apps React; 'console.log' é melhor para depuração)
}

export default function Dashboard() {
  return (
    <main>
      <section>
        <h2>Olá</h2>
        <h2>Nome completo do cliente</h2>

        <div>
          <p>Agência: 0001</p>
          <p>Conta Corrente: 12345-6</p>
        </div>
        <div>
          <Button className="btn" onClick={handleClick}>
            Sair
          </Button>
          <Button className="btn" onClick={handleClick}>
            Alterar senha
          </Button>
          <Button className="btn" onClick={handleClick}>
            Encerrar conta
          </Button>
        </div>
      </section>

      <section>
        <Button className="btn" onClick={handleClick}>
          Ver extrato
        </Button>
        <Button className="btn" onClick={handleClick}>
          Depositar
        </Button>
        <Button className="btn" onClick={handleClick}>
          Pagar
        </Button>
        <Button className="btn" onClick={handleClick}>
          Transferir
        </Button>

        <h3>Saldo bancário disponível</h3>
      </section>
    </main>
  );
}
