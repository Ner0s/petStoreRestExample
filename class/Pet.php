<?php

class Pet
{
    public function getPets()
    {
        $curl = curl_init();

        curl_setopt($curl, CURLOPT_URL, "https://petstore.swagger.io/v2/pet/findByStatus?status=available");
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

        $result = curl_exec($curl);

        curl_close($curl);

        echo $result;
    }
}