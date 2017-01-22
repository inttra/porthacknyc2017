package org.hackathon.lcl.vo;

import java.util.List;

public class SearchResponse
{
  protected String messageHeader;
  //protected List<TransportPlan> transportPlan;
  //protected List<Object> ecommerceErrors;

  public String getMessageHeader()
  {
    return this.messageHeader;
  }

  public void setMessageHeader(String messageHeader) {
    this.messageHeader = messageHeader;
  }
/*
  public List<TransportPlan> getTransportPlan() {
    return this.transportPlan;
  }

  public void setTransportPlan(List<TransportPlan> transportPlan) {
    this.transportPlan = transportPlan;
  }

  public List<Object> getEcommerceErrors() {
    return this.ecommerceErrors;
  }

  public void setEcommerceErrors(List<Object> ecommerceErrors) {
    this.ecommerceErrors = ecommerceErrors;
  }*/
}
