package onde.digitalinnovation.gof;

import onde.digitalinnovation.strategy.ComportamentoAgressivo;
import onde.digitalinnovation.strategy.ComportamentoDefensivo;
import onde.digitalinnovation.strategy.ComportamentoNormal;

public class Test {
    public static void main(String[] args) {
         SingletonLazy lazy = SingletonLazy.getInstancia();
         System.out.println(lazy);
         lazy = SingletonLazy.getInstancia();
         System.out.println(lazy);
    
        SingletonEager eager = SingletonEager.getInstancia();
         System.out.println(eager);
         eager = SingletonEager.getInstancia();
         System.out.println(eager);

        SingletonLazyHolder lazyHolder = SingletonLazyHolder.getInstancia();

        //strategy
        Comportamento normal = new ComportamentoNormal();
        Comportamento defensivo = new ComportamentoDefensivo();
        Comportamento agressivo = new ComportamentoAgressivo();

        Robo robo = new Robo();
        robo.setComportamento(normal);
        robo.mover();
        robo.setComportamento(defensivo);
        robo.mover();
        robo.setComportamento(agressivo);
        robo.mover();
    
        //facede
        Facede facede = new Facede();
        facede.migrarCliente("João da Silva", "12345678");
    }
        
}