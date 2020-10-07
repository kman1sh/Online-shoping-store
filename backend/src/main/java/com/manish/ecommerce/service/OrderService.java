package com.manish.ecommerce.service;
import com.manish.ecommerce.domain.MyOrder;
import com.manish.ecommerce.domain.MyOrders;
import com.manish.ecommerce.domain.OrderModal;
import com.manish.ecommerce.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public OrderModal save(OrderModal order) {
        String orderId = "OID" + UUID.randomUUID().toString();
        String timeStamp = new Date().toString();

        order.setDate(timeStamp);
        order.setOrderId(orderId);

        return orderRepository.save(order);
    }

    public List<MyOrder> ordersByUsername(String username) {
        List<OrderModal> allByUsername = orderRepository.findAllByUsername(username);
        List<MyOrder> myOrdersList = new ArrayList<>();

        for(OrderModal order: allByUsername) {
            MyOrder myOrder = new MyOrder();
            myOrder.setOrderId(order.getOrderId());
            myOrder.setDate(order.getDate());
            myOrder.setPaid(" ");
            myOrder.setTotal(order.getTotalPrice());
            myOrdersList.add(myOrder);
        }

        return myOrdersList;

    }

    public OrderModal getOrder(String orderId) {
        return orderRepository.findByOrderId(orderId);
    }
}
