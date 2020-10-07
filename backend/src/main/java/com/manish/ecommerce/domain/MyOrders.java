package com.manish.ecommerce.domain;

import java.util.List;

public class MyOrders {

    private List<MyOrder> orders;

    public List<MyOrder> getOrders() {
        return orders;
    }

    public void setOrders(List<MyOrder> orders) {
        this.orders = orders;
    }

    @Override
    public String toString() {
        return "MyOrders{" +
                "orders=" + orders +
                '}';
    }
}
