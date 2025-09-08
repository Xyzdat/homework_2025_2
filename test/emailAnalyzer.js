'use strict';

QUnit.module("Тестируем функцию emailAnalyzer", function() {
    QUnit.test("Работает правильно со строкой с одним email", function(assert) {
        const input = "Мой email: user@example.com.";
        const result = emailAnalyzer(input);

        assert.deepEqual(result, {
            emailCount: 1,
            uniqueEmails: ["user@example.com"],
            mostFrequentEmail: "user@example.com"
        });
    });

    QUnit.test("Работает правильно со строкой с разными регистрами email", function(assert) {
        const input = "Контакты: User@Example.com и user@example.com.";
        const result = emailAnalyzer(input);

        assert.deepEqual(result, {
            emailCount: 2,
            uniqueEmails: ["user@example.com"],
            mostFrequentEmail: "user@example.com"
        });
    });

    QUnit.test("Работает правильно со строкой с некорректными email", function(assert) {
        const input = "Некорректные email: user@, @example.com, user@domain..com.";
        const result = emailAnalyzer(input);

        assert.deepEqual(result, {
            emailCount: 0,
            uniqueEmails: [],
            mostFrequentEmail: ""
        });
    });

    QUnit.test("Работает правильно с пустой строкой", function(assert) {
        const input = "";
        const result = emailAnalyzer(input);

        assert.deepEqual(result, {
            emailCount: 0,
            uniqueEmails: [],
            mostFrequentEmail: ""
        });
    });

    QUnit.test("Работает правильно с доменами высокого уровня ", function(assert) {
        const input = "домены высокого уровня: user@m.vk.com";
        const result = emailAnalyzer(input);

        assert.deepEqual(result, {
            emailCount: 1,
            uniqueEmails: ["user@m.vk.com"],
            mostFrequentEmail: "user@m.vk.com"
        });
    });

    QUnit.test("Работает правильно с доменами высокого уровня(несколько email)", function(assert) {
        const input = "домены высокого уровня: user@m.vk.com, user@m.vk.com, user1@y.yandex.com, user2@y.yandex.com ";
        const result = emailAnalyzer(input);

        assert.deepEqual(result, {
            emailCount: 4,
            uniqueEmails: ["user@m.vk.com","user1@y.yandex.com", "user2@y.yandex.com"],
            mostFrequentEmail: "user@m.vk.com"
        });
    });


    QUnit.test("Работает правильно с со странными и необычными email", function(assert) {
        const input = "домены высокого уровня: john..doe@example.org, john..doe@example.org, long.email-address-with-hyphens@and.subdomains.example.com";
        const result = emailAnalyzer(input);

        assert.deepEqual(result, {
            emailCount: 3,
            uniqueEmails: ["john..doe@example.org", "long.email-address-with-hyphens@and.subdomains.example.com"],
            mostFrequentEmail: "john..doe@example.org"
        });
    });


    
});


