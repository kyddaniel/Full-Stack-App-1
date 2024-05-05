package com.danielCode.ChallengeApp;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/challenges")
public class ChallengeController {

    private ChallengeService challengeService;

    public ChallengeController(ChallengeService challengeService) {
        this.challengeService = challengeService;
    }

    @GetMapping
    public ResponseEntity<List<Challenge>> getAllChallenges() {
        return new ResponseEntity<>(challengeService.getAllChallenges(), HttpStatus.OK);
    }

    @GetMapping("/{month}")
    public ResponseEntity<Challenge> getAChallenges(@PathVariable String month) {
        Challenge challenge = challengeService.getChallenge(month);

        if (challenge != null) {
            return new ResponseEntity<>(challenge, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<String> addChallenge(@RequestBody Challenge challenge) {
        if (challengeService.addChallenge(challenge)) {
            return new ResponseEntity<>("Challenge added successfully", HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("Challenge not added successfully", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateChallenge(@PathVariable Long id, @RequestBody Challenge updateChallenge) {
        if (challengeService.updateChallenge(id, updateChallenge)) {
            return new ResponseEntity<>("Challenge updated successfully", HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("Challenge not updated successfully", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteChallenge(@PathVariable Long id) {
        if (challengeService.deleteChallenge(id)) {
            return new ResponseEntity<>("Challenge deleted successfully", HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("Challenge not deleted successfully", HttpStatus.NOT_FOUND);
        }
    }
}
