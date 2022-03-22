package com.example.demo.Repository;



import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.demo.Registro;
public interface BuscarRepository extends JpaRepository<Registro, Long>{
 @Query("from Registro b where b.cep=:keyword OR b.endereco=:keyword OR b.cidade=:keyword")
 Page<Registro> findAll(Pageable pageable,@Param("keyword") String keyword);
 
}