package onde.digitalinnovation.gof.facede;

import onde.digitalinnovation.subsistema1.crm.CrmService;
import onde.digitalinnovation.subsistema2.cep.CepApi;

public class Facede {
    public void migrarCliente(String nome, String cep){
        String cidade = CepApi.getInstancia().recuperarCidade(cep);
        String estado = CepApi.getInstancia().recuperarEstado(cep);

        CrmService.gravarCliente(nome, cep, cidade, estado);
    }

}
