package health;

import com.codahale.metrics.health.HealthCheck;

public class PetWebsiteHealthCheck extends HealthCheck {

    public PetWebsiteHealthCheck() {
        super();
    }

    @Override
    protected Result check() throws Exception {
        return Result.healthy();
    }


}
