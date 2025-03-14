public class Usuario {
    public static void main(String[] args) throws Exception {

        SmarTv smarTv = new SmarTv();

        System.out.println("TV Ligada: " + smarTv.ligada);
        System.out.println("Canal Atual: " + smarTv.canal);
        System.out.println("Volume Atual: " + smarTv.volume);

        smarTv.diminuirVolume();
        smarTv.diminuirVolume();
        smarTv.diminuirVolume();
        smarTv.aumentarVolume();

        System.out.println("O volume atual é: " + smarTv.volume);

        smarTv.ligar();
        System.out.println("Novo Status >> " + smarTv.ligada);

        smarTv.mudarCanal(13);

        System.out.println("O Canal está no: " + smarTv.canal);
    }
}
