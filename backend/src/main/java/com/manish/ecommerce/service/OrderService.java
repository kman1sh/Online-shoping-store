package com.manish.ecommerce.service;

import com.manish.ecommerce.domain.OrderModel;
import com.manish.ecommerce.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.UUID;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public OrderModel save(OrderModel order) {
        String orderId = "OID" + UUID.randomUUID().toString();
        String timeStamp = new Date().toString();

        order.setDate(timeStamp);
        order.setOrderId(orderId);

        return orderRepository.save(order);
    }
}
