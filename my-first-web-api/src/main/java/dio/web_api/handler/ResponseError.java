package dio.web_api.handler;

import java.util.Date;

public class ResponseError {
    private Date timestamp = new Date();
    private String status = "error";
    private int statuscode = 400;
    private String error;
    public Date getTimestamp() {
        return timestamp;
    }
    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public int getStatuscode() {
        return statuscode;
    }
    public void setStatuscode(int statuscode) {
        this.statuscode = statuscode;
    }
    public String getError() {
        return error;
    }
    public void setError(String error) {
        this.error = error;
    }
    

}
