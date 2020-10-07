package com.manish.ecommerce.domain;

import org.springframework.data.annotation.Id;

public class MyOrder {

    @Id
    private String orderId;
    private String date;
    private double total;
    private String paid;

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public String getPaid() {
        return paid;
    }

    public void setPaid(String paid) {
        this.paid = paid;
    }

    @Override
    public String toString() {
        return "MyOrder{" +
                "orderId='" + orderId + '\'' +
                ", data='" + date + '\'' +
                ", total=" + total +
                ", paid='" + paid + '\'' +
                '}';
    }
}
