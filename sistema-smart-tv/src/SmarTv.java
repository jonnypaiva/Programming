public class SmarTv {
    boolean ligada=false;
    int canal = 1;
    int volume = 25;

    public void ligar(){
        ligada=true;
    }

    public void desligar (){
        ligada=false;
    }

    public void aumentarVolume(){
        volume++;
        //ou volume = volume + 1;
    }

    public void diminuirVolume(){
        volume--;

    }

    public void aumentarCanal (){
        canal++;
    }

    public void diminuirCanal (){
        canal--;
    }
    
    public void mudarCanal (int novoCanal){
        canal = novoCanal;
    }
}

