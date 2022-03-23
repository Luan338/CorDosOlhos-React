
package com.example.demo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class RegistroController {

 @Autowired
private RegistroRepository registroRepository;
 
 //pesquisa
 

 
 
 //pesquisa
 
 
 
 
 
// get all employees
@GetMapping("/registro")
public List<Registro> getAllEmployees(){
return registroRepository.findAll();
}
// create employee rest api
@PostMapping("/registro")
public Registro createRegistro(@RequestBody Registro registro) {
return registroRepository.save(registro);
}
// get employee by id rest api
@GetMapping("/registro/{id}")
public ResponseEntity<Registro> getRegistroById(@PathVariable Long id) {
	Registro registro = registroRepository.findById(id)
.orElseThrow(() -> new ResourceNotFoundException("Registro not exist with id :" + id));
return ResponseEntity.ok(registro);
}
// update employee rest api
@PutMapping("/registro/{id}")
public ResponseEntity<Registro> updateRegistro(@PathVariable Long id, @RequestBody Registro registroDetails){
	Registro registro = registroRepository.findById(id)
.orElseThrow(() -> new ResourceNotFoundException("Registro not exist with id :" + id));
	registro.setEndereco(registroDetails.getEndereco());
	registro.setNumero(registroDetails.getNumero());
	registro.setCep(registroDetails.getCep());
	registro.setBairro(registroDetails.getBairro());
	registro.setCidade(registroDetails.getCidade());
	registro.setPontoreferencia(registroDetails.getPontoreferencia());
	registro.setDescreva(registroDetails.getDescreva());
	registro.setEtnia(registroDetails.getEtnia());
	registro.setGenero(registroDetails.getGenero());

	Registro updatedRegistro = registroRepository.save(registro);
return ResponseEntity.ok(updatedRegistro);
}
// delete employee rest api
@DeleteMapping("/registro/{id}")
public ResponseEntity<Map<String, Boolean>> deleteRegistro(@PathVariable Long id){
	Registro registro = registroRepository.findById(id)
.orElseThrow(() -> new ResourceNotFoundException("Registro not exist with id :" + id));
	registroRepository.delete(registro);
Map<String, Boolean> response = new HashMap<>();
response.put("deleted", Boolean.TRUE);
return ResponseEntity.ok(response);
}
}

