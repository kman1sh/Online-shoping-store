package com.manish.ecommerce.controllers;

import com.manish.ecommerce.domain.*;
import com.manish.ecommerce.repository.ProductRepository;
import com.manish.ecommerce.service.OrderService;
import com.manish.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class controller {

    private final ProductRepository repo;

    private final UserService userService;

    private final OrderService orderService;

    @Autowired
    public controller(ProductRepository repo, UserService userService, OrderService orderService) {
        this.repo = repo;
        this.userService = userService;
        this.orderService = orderService;
    }

    @GetMapping(value = "/products")
    public List<Product> getProducts() {
        return repo.findAll();
    }

    @PostMapping(value = "/products")
    public String getProducts(@RequestBody Product product) {
        Optional<Product> product1 = repo.findById(product.getId());
        if(product1.isPresent())
            return "Product with id: " +product.getId() + " already exists";

        repo.save(product);
        return "Saved Successfully";
    }

    @GetMapping(value = "/product/{id}")
    public Product getProduct(@PathVariable("id") Integer id) {
        Optional<Product> product = repo.findById(id);
        if(product.isEmpty())
            return null;
        return product.get();
    }

    @PostMapping(value = "/users/register")
    public ResponseEntity<UserResponseModel> createUser(@RequestBody CreateUserModel userDetails) {
        UserResponseModel createdUser =  userService.createUser(userDetails);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

    @PostMapping(value = "/order")
    public OrderModal createOrder(@RequestBody OrderModal order) {
        return orderService.save(order);
    }

    @GetMapping(value = "/order/{orderId}")
    public OrderModal getOrder(@PathVariable String orderId) {
        return orderService.getOrder(orderId);
    }

    @GetMapping(value = "/orders/{username}")
    public List<MyOrder> myOrders(@PathVariable String username) {
        return orderService.ordersByUsername(username);
    }


}
