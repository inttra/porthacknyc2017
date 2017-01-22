package org.hackathon.lcl.vo;

public class SearchRequest
{
  protected String from;
  protected String to;
  protected String fromDate;
  protected String toDate;
  protected String cargoType;
  protected String brands;

  public String getFrom()
  {
    return this.from;
  }
  public void setFrom(String frm) {
    this.from = frm;
  }

  public String getTo() {
    return this.to;
  }
  public void setTo(String to) {
    this.to = to;
  }

  public String getFromDate() {
    return this.fromDate;
  }

  public void setFromDate(String fromDate) {
    this.fromDate = fromDate;
  }

  public String getToDate() {
    return this.toDate;
  }

  public void setToDate(String date) {
    this.toDate = date;
  }

  public String getBrands() {
    return this.brands;
  }
  public void setBrands(String brands) {
    this.brands = brands;
  }

  public String getCargoType() {
    return this.cargoType;
  }
  public void setCargoType(String type) {
    this.cargoType = type;
  }
}