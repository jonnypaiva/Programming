package onde.digitalinnovation.gof;

//Singleton Preguiçoso

public class SingletonLazy {
    private static SingletonLazy instancia;

    private SingletonLazy() {
        super();
    }

    public static SingletonLazy getInstancia() {
        if (instancia == null) {
            instancia = new SingletonLazy();
        }
        return instancia;
    }

    public void exibirMensagem() {
        System.out.println("Olá Mundo!");
    }

    public class getInstancia {
    }   
}
