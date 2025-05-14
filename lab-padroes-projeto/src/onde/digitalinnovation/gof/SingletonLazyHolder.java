package onde.digitalinnovation.gof;
//singleton Lazy Holder
public class SingletonLazyHolder {
    private static class InstanceHolder {
        public static SingletonLazyHolder instancia = new SingletonLazyHolder();
    }

    private SingletonLazyHolder() {
        super();
    }

    public static SingletonLazyHolder getInstancia() {
        return InstanceHolder.instancia;
    }

    public void exibirMensagem() {
        System.out.println("Olá Mundo!");
    }
}